from flask import Flask
from flask.globals import request
from flask.templating import render_template

app = Flask(__name__)

@app.route("/temp",methods=["GET"])
def temp():
    return render_template("test.html",text="google")

@app.route("/")
def home():
    return "<h1>hello world</h1>"

@app.route("/greet")
def greet():
    name=request.args.get('name')
    return render_template("test.html",text=name)

@app.route("/login",methods=["POST"])
def login():
    na=request.form.get('name')
    pp=request.form.get('pa')
    return render_template("login.html",name=na,pw=pp)

app.run(port=3508)