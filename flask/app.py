from flask import Flask, request, render_template
 
app = Flask(__name__)
 
@app.route("/")
def hello():
    return  render_template("index.html")

@app.route("/hello", methods=["POST"])
def hello_name(name):
    return render_template("greet.html", name=name)


if __name__ == "__main__":
    app.run()
