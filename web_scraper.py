import csv
import requests
from bs4 import BeautifulSoup

def scrape_website(url):
    response = requests.get(url)
    if response.status_code == 200:
        soup = BeautifulSoup(response.text, 'html.parser')
        data_list = []
        titles = soup.find_all('h2', class_='title')
        for title in titles:
            data_list.append(title.text.strip())

        return data_list
    else:
        print("Failed to retrieve data from the website.")
        return []

def save_to_csv(data_list, filename):
    with open(filename, 'w', newline='', encoding='utf-8') as csvfile:
        writer = csv.writer(csvfile)
        writer.writerow(['Title']) 

        for data in data_list:
            writer.writerow([data])

if __name__ == '__main__':
    url = 'https://example.com'

    data_list = scrape_website(url)

    if data_list:
        save_to_csv(data_list, 'scraped_data.csv')
        print("Data scraped and saved to 'scraped_data.csv' successfully.")
    else:
        print("No data scraped.")
