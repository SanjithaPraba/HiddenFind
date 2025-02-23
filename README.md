# HiddenFind
HiddenFind is uplifting small businesses in New York City by making them easier to find than ever before! NYC is constantly fighting against gentrification; with OG small businesses already not having a large online presence they can turn into hidden gems of the city that become harder and harder to find. **Use our Natural Language Processing powered search engine to search for small businesses in every category, including shopping, entertainment, museums, cuisine and much more.** 

Checkout our demo!: https://www.youtube.com/watch?v=y8jJJD9m_ns&feature=youtu.be
Authors: Sanjitha Prabakaran, Harshith Gowrisetty, Anjana Raman


## Technologies Used
This application is built using the following technologies:

- **React** – Front-end framework for building the user interface.
- **Python** – Backend processing and machine learning scripts
- **JavaScript** – Handles interactivity and API communication.
- **Flask** - API calls for connectivity
- **BeautifulSoup** - Web Scraping Library
- **SentenceTransformer** - Natural Language Processing
- **SKLearn** - Natural Language Processing (Cosine Similarity)

## Prerequisites 
Ensure you have the following installed on your system:
- **Node.js** – for running the React front-end
- **Python 3** – for running the Flask back-end
- **pip** - for installing Python dependencies

## Installation and Setup 
### Clone the Repo
```
git clone https://github.com/your-username/your-repo.git
cd your-repo
cd spot-match
```

### Install Dependencies 
```
pip install -r requirements.txt
npm install
```

### Start the React Application
```
npm start
```
This will start the front-end server on http://localhost:3000/.

### Start the Flask Server 
In another terminal start the flask server:
```
python generate_responses.py
```

### Run the React Application
```
node app.js
```
### Usage 
1. Open your browser and go to http://localhost:3000/.

2. Enter a description of the business you are searching for.

3. The results will be displayed with business names, descriptions, similarity scores, and links to their websites.




