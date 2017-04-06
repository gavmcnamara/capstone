from sqlalchemy import *
from sqlalchemy import create_engine, ForeignKey
from sqlalchemy import Column, Date, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship, backref
import binascii
from hashlib import pbkdf2_hmac
from app import sessionmaker
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
        self.password = dk(password)


    dk = pbkdf2_hmac('sha256', b'password', b'salt', 100000)
    binascii.hexlify(dk)


# create tables
Base.metadata.create_all(engine)
