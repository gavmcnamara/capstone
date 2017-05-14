from sqlalchemy import *
from sqlalchemy import create_engine, ForeignKey
from sqlalchemy import Column, Date, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship, backref
import hashlib, binascii
import os

engine = create_engine('mysql://root:@localhost:3306/shootingla', echo=True)
Base = declarative_base()



##############################################################

class User(Base):
    """"""
    __tablename__ = "users"

    username = Column(String, primary_key=True)
    password = Column(String)

    # ---------------------------------------------------------
    def __init__(self, username, password):
        self.username = username
        dk = hashlib.pbkdf2_hmac('sha256', password, 'salt', 100000)
        self.password = binascii.hexlify(dk)


class photographers(Base):

    __tablename__ = "photographers"

    id = Column(String, primary_key=True)
    fname = Column(String)
    lname = Column(String)
    phone_number = Column(String)
    email = Column(String)
    tier = Column(String)

    def __init__(self, id, fname, lname):
        self.id = id
        self.fname = fname
        self.lname = lname

    @property
    def serialize(self):

        return {
            'id' : self.id,
            'fname' : self.fname,
            'lname' : self.lname,
            'phone_number' : self.phone_number,
            'email' : self.email,
            'tier' : self.tier
        }



        

# create tables
Base.metadata.create_all(engine)
