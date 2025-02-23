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

## Inspiration
With gentrification being a big problem in large urban centers like New York, we wanted to create a solution that would highlight the places that make this large city so unique and special: the small businesses. Not only does exploring small businesses, give residents of New York the ability to discover new places around the city, but it also gives these local spots a fighting chance against big chains that are trying to drive them out. 

## What it does
HiddenFinder consists of a natural language processing powered search engine, where users can input what they are looking for whether it is restaurants, boutiques, or even a realtor and they will get accurate results (based on the semantic similarity between their search and our small business database) that are exclusively small businesses serving their need. Results include the businesses' names, descriptions, and functional links to their website to learn more. 

## How we built it
First, we compiled our data by using the BeautifulSoup library to web scrape all of the small business data from the Greater New York Chamber of Commerce Member directory; this is a directory of exclusively small businesses across the NYC Metropolitan area. We chose NYC as it is a large city with huge economic activity. Once we scraped the business names, descriptions, and links, we produced a JSON file containing all of the data we required which we then cleaned to remove duplicates, helping improve our accuracy and decreasing load time. In parallel, we also built our front-end with React, where the user actually submits a query for via the search engine. We connected our backend Python scripts with our React front-end with the Flask API, sending POST requests and responses once we received a query on the search engine and feeding that query into our Python script. This Python script then utilized the SentenceTransformers library to create embeddings (vectorized data points) and then fed them into cosine similarity models (supplied by the scikit-learn library) in order to find the top 10 most similar businesses (based on name and description) in relation to the search engine query. This array of top 10 businesses is sent back over to the front-end (closing the Flask API process) and then displayed in a Scrollable component with React. Users can then continue on and make a new query to continue discovering small businesses in New York City. 

## Challenges we ran into
The first challenge we ran into was figuring out what problem we wanted to solve. We pivoted often in the beginning of our brainstorm process, considering other ideas such as a random spot generator (to help people discover new restaurants and activities) based on location and even considered a dog dating app to help people meet each other in a fun way. We ultimately landed on our idea of supporting small businesses because we wanted to build a project rooted in community service and uplifting underserved populations. The initial set up when starting to implement our solution was also difficult, this included finding out what we did and didn't have installed on our computers and having trouble installing the software we wanted to use. Collecting the data also proved to be a struggle. We first wanted to use an open-source API to collect data for our search engine and looked to many sources like GoogleMaps API, GooglePlaces API, however using these APIs would get expensive fast. We also looked at RapidAPI and started implementing a solution with it however the free API calls with our accounts were used up faster than anticipated. This is when we pivoted to web scraping the Greater New York Chamber of Commerce website which then solidified our problem statement of highlighting small businesses and focusing on New York City.

## Accomplishments that we're proud of
We are proud of creating a clean solution that could not only help residents find new areas to explore in New York City but also shed a light on small businesses in such a big space. A typical Google search can highlight small businesses but only those with a strong search engine optimization process already in place or are already popular spots and have high quantities of reviews. Our search engine is purely matching on relevance of the search and helps uplift businesses that have a limited online presence. We are also proud of applying our knowledge in React and front-end development and leveraging Python libraries and our background in Machine Learning to create a powerful solution that is efficient and accurate. 

## What we learned
A big lesson we learned was the whole process of figuring out a problem to solve and creating a solution with the knowledge we have to tackle it. Although this proved to be difficult at times, it was extremely gratifying when our solution was finally coming together. Another lesson we learned was that we should properly research the resources we can use before jumping right into creating a solution, if we had done more careful research we probably could have saved time when implementing our solution (like realizing that RapidAPI only had a very limited free tier). Lastly, with the constrained resources we had, we ended up coming up with a solution we felt was more impactful proving that scarce resources could lead to positive redirection.

## What's next for HiddenFind
In the future, we would like to expand the database to include more small businesses, especially more small businesses with descriptions/summaries to improve accuracy of our search engine results. We would also like to leverage a large language model rather than cosine similarity to decrease response time to user queries. 

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




