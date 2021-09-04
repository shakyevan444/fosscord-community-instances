import json

data = json.loads(open("instances.json", "r").read())
with open("README.md", "w") as readme:
    rendered_data = ""
    for i in data:
        rendered_data += "### [{0}]({1})\n![{0} image]({3})\n\n{2}\n".format(
            i[0], i[1], i[2], i[3])
    readme.write(open("README.template.md", "r").read().replace(
        "<% generated_content %>", rendered_data))
