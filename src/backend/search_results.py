from flask import Flask, jsonify
from googlesearch import search

app = Flask(__name__)

# Define the endpoint for search results
@app.route('/search-results')
def get_search_results():
    technology_names = ["Java", "Python", "React", "JavaScript", ".NET", "HTML", "CSS"]

    # Dictionary to store search results for each technology entity
    search_results_dict = {}

    for technology in technology_names:
        search_results = google_search(f"{technology} interview", 4)
        search_results_dict[technology] = search_results[:4]

    # Return the search results as JSON
    return jsonify(search_results_dict)


def google_search(query, num_results):
    search_results = list(search(query, num_results=num_results))
    return search_results


if __name__ == '__main__':
    app.run()
