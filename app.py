from flask import Flask
from flask import Flask, flash, redirect, render_template, request, session, abort, jsonify
import os
from sqlalchemy.orm import sessionmaker
from tabledef import *


engine = create_engine('mysql://root:@localhost:3306/shootingla', echo=True)

app = Flask(__name__)

@app.route('/')
def home():
    if not session.get('logged_in'):
        return render_template('login.html')
    else:
        return "You are logged in! <a href='/logout'>Logout</a>"


@app.route('/login', methods=['POST'])
def do_admin_login():
    POST_USERNAME = str(request.form['username'])
    dk = hashlib.pbkdf2_hmac('sha256', str(request.form['password']), 'salt', 100000)
    POST_PASSWORD = binascii.hexlify(dk)


    Session = sessionmaker(bind=engine)
    s = Session()
    query = s.query(User).filter(User.username.in_([POST_USERNAME]), User.password.in_([POST_PASSWORD]))
    result = query.first()
    if result:
        session['logged_in'] = True
        return render_template('main.html')
        # return render_template('react_router.html')
    # else:
        flash('wrong_password!')
        return "Wrong password!"



@app.route("/logout")
def logout():
    session['logged_in'] = True
    return home()

#################### need to connect code to photographers table and javascript

@app.route('/_get_current_photographer', methods=["GET"])
def get_current_photographer():

    Session = sessionmaker(bind=engine)
    s = Session()
    query = s.query(photographers)

    return jsonify(json_list=[i.serialize for i in query.all()])





if __name__ == "__main__":
    app.secret_key = os.urandom(12)
    app.run(debug=True, host='0.0.0.0', port=4000)
