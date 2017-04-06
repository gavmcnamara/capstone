from app import *
from tabledef import User

session.add(User('admin', 'password1'))

session.commit()