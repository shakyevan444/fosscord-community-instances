import json

data = json.loads(open("instances.json", "r").read())
with open("README.md", "w") as readme:
    rendered_data = ""
    for i in data:
        image_code = ""
        if "image" in i and i["image"] != "":
            image_code = "![{0} image]({1})\n\n".format(i["name"], i["image"])
        rendered_data += "### [{0}]({1})\n{3}{2}\n".format(
            i["name"], i["url"], i["description"], image_code)
    readme.write(open("README.template.md", "r").read().replace(
        "<% generated_content %>", rendered_data))
