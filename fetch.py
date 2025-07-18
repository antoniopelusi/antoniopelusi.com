import requests
import json

def fetch_repos():
    base_url = "https://api.github.com/users/antoniopelusi/repos"
    all_repos = []
    page = 1
    per_page = 100  # Maximum allowed by GitHub

    while True:
        url = f"{base_url}?per_page={per_page}&page={page}"
        response = requests.get(url)

        if response.status_code != 200:
            print(f"Errore: Impossibile ottenere le repository (status code: {response.status_code})")
            break

        repos = response.json()
        if not repos:
            break  # No more repos

        for repo in repos:
            languages_url = repo["languages_url"]
            languages_response = requests.get(languages_url)
            languages = languages_response.json() if languages_response.status_code == 200 else {}

            filtered_repo = {
                "created_at": repo["created_at"],
                "name": repo["name"],
                "html_url": repo["html_url"],
                "languages": list(languages.keys())
            }
            all_repos.append(filtered_repo)

        page += 1  # Next page

    final_json = json.dumps(all_repos, indent=4)
    with open('assets/data/repos.json', 'w') as json_file:
        json_file.write(final_json)
    print("Repos: ready")

def fetch_cv():
    url = "https://drive.google.com/uc?export=download&id=1gO0xD8AMeXDzXfcd_xIzL01kG7lrVOGj"
    response = requests.get(url)

    if response.status_code == 200:
        with open("assets/data/cv.pdf", "wb") as file:
            file.write(response.content)
        print("CV: ready")
    else:
        print(f"Errore: Impossibile scaricare il CV (status code: {response.status_code})")

fetch_repos()
fetch_cv()
