import json
import numpy as np
from flask import Flask, request, jsonify
from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity
from flask_cors import CORS

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS for frontend communication

# Load Sentence Transformer model ONCE
model = SentenceTransformer("all-MiniLM-L6-v2")

# Load businesses JSON data
def load_businesses(json_file="nyc_businesses_cleaned.json"):
    try:
        with open(json_file, "r", encoding="utf-8") as file:
            return json.load(file)
    except Exception as e:
        print("Error loading JSON file:", str(e))
        return []

# Compute cosine similarity and return top businesses
def find_best_businesses(query, businesses):
    if not businesses:
        return []
    
    # Extract descriptions and names
    descriptions = [biz.get("summary", "") for biz in businesses]
    names = [biz.get("business_name", "Unnamed Business") for biz in businesses]
    web_addresses = [biz.get("web address", "#") for biz in businesses]  # Default to "#" if no URL


    # Concatenate name and description
    texts = [f"{name} - {desc}" for name, desc in zip(names, descriptions)]

    # Convert text to embeddings
    query_embedding = model.encode([query])
    business_embeddings = model.encode(texts)

    # Compute cosine similarity
    similarities = cosine_similarity(query_embedding, business_embeddings)[0]

    # Sort by highest similarity
    ranked_indices = np.argsort(similarities)[::-1]
    print(web_addresses[ranked_indices[0]])
    top_businesses = [
        {
            "name": names[i],
            "description": descriptions[i],
            "score": float(similarities[i]),
            "web_address": web_addresses[i]  # Include the web link
        }
        
        for i in ranked_indices[:10]  # Return top 10 results
    ]
    return top_businesses

@app.route('/process', methods=['POST'])
def process_request():
    try:
        data = request.get_json()
        query = data.get("description", "").strip()

        if not query:
            return jsonify({"error": "Missing description"}), 400

        print(f"Received query: {query}")  # Debugging log

        businesses = load_businesses()

        if not businesses:
            return jsonify({"message": "No businesses available.", "results": []})

        # Find top business matches
        top_businesses = find_best_businesses(query, businesses)

        print(f"Returning {len(top_businesses)} results")  # Debugging log

        return jsonify({"message": "Success", "results": top_businesses})

    except Exception as e:
        print("Error processing request:", str(e))  # Debugging log
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    print("Starting Flask backend...")
    app.run(debug=True, port=5000)
