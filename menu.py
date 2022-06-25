from cgitb import html
from bs4 import BeautifulSoup
import glob


with open("menu.part", "r") as m:
    menu = BeautifulSoup(m.read(), features="lxml").findAll('nav')[0]

# For all html file in directory
for html_file in glob.glob("*.html"):

    with open(html_file, "r") as f:
        contents = f.read()
        soup = BeautifulSoup(contents, "html.parser")

    with open(html_file, "w") as f:
        for link in soup.findAll('nav'):
            link.replace_with(menu)
        # write out raw html to file
        f.write(soup.prettify())