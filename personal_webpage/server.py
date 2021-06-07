from flask import Flask
from flask import redirect
from flask import url_for
from flask import render_template
from flask import request
import pymysql

app=Flask(__name__)
db=pymysql.connect(host="127.0.0.1",user="flyhighhigh",passwd="qqwweerr",db="db_practice")
cursor=db.cursor()


@app.route('/',methods=["GET"])
def home():
    cursor.execute("select * from comments")
    data=cursor.fetchall()
    return render_template("index_bootstrap.html",data=data)


@app.route('/',methods=["POST"])
def newdata():
    name=request.form.get('name')
    text=request.form.get("comment")
    #輸進database
    comm="insert into comments(name,text) values(%s,%s);"
    val=(name,text)
    cursor.execute(comm,val)
    db.commit()
    return redirect(url_for('home')) 

app.run(port=5000)
