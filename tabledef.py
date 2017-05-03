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

        

# create tables
Base.metadata.create_all(engine)
