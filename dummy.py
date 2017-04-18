import datetime
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from tabledef import *

engine = create_engine('mysql://root:@localhost:3306/shootingla', echo=True)

# create a session 
Session = sessionmaker(bind=engine)
session = Session()

user = User("admin", "password")
session.add(user)

user = User("jumpiness", "python")
session.add(user)

user = User("Erin", "Duffy")
session.add(user)

# commit the record the database
session.commit()

session.commit() 