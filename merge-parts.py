# Merge menu and footer parts into all the HTML prior to commiting
from bs4 import BeautifulSoup
import glob

with open("menu.part", "r") as m:
    menu = BeautifulSoup(m.read(), features="lxml").findAll('nav')[0]

with open("footer.part", "r") as m:
    footer = BeautifulSoup(m.read(), features="lxml").findAll('footer')[0]

# For all html file in directory
for html_file in glob.glob("*.html"):

    with open(html_file, "r") as f:
        contents = f.read()
        soup = BeautifulSoup(contents, "html.parser")

    with open(html_file, "w") as f:
        for link in soup.findAll('nav'):
            link.replace_with(menu)
        for link in soup.findAll('footer'):
            link.replace_with(footer)
        # write out raw html to file
        f.write(soup.prettify())