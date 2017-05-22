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

    def __init__(self, id, fname, lname, phone_number, email, tier):
        self.id = id
        self.fname = fname
        self.lname = lname
        self.phone_number = phone_number
        self.email = email
        self.tier = tier

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

class location(Base):
    __tablename__ = "location"

    id = Column(String, primary_key=True)
    square_feet = Column(String)
    address = Column(String)
    photographers = Column(String)


    def __init__(self, id, square_feet, address, photographers):
        self.id = id
        self.sq = square_feet
        self.address = address
        self.photographers = photographers

    @property
    def serialize(self):
        return {
            'id': self.id,
            'square_feet': self.square_feet,
            'address': self.address,
            'photographers': self.photographers

        }

class customers(Base):
    __tablename__ = "customers"

    id = Column(String, primary_key=True)
    fname = Column(String)
    lname = Column(String)
    email = Column(String)
    phone_number = Column(String)

    def __init__(self, id, fname, lname, email, phone_number):
        self.id = id
        self.fname = fname
        self.lname = lname
        self.email = email
        self.phone_number = phone_number

    @property
    def serialize(self):
         return {
            'id': self.id,
            'fname': self.fname,
            'lname': self.lname,
            'email': self.email,
            'phone_number': self.phone_number





        }

# create tables
Base.metadata.create_all(engine)
