import os
import csv
import json
from model import myfunct
##import model ##to render machine learning script

import pandas as pd
import numpy as np
from flask import Flask, jsonify, render_template, request, redirect, url_for


app = Flask(__name__)

##################################################################################
# Setup
##################################################################################



#################################################
# Deploy first page/index.html
#################################################

@app.route("/")
def main():
     return render_template("index.html")

@app.route('/aboutus.html')
def aboutus():
    return render_template('aboutus.html')

@app.route('/beerindex.html')
def beer():
    return render_template('beerindex.htm')

@app.route("/result", methods=['GET', 'POST'])
def result():
    if request.method == "POST":
        print("it worked")
        try:
            print('trying')
            test = request.form.getlist('beer')
            result_data = myfunct(test)
            print(result_data)
        except:
            print("Error!!")  
        return render_template('result.html', mydata=result_data['name'].tolist(), mydata2=result_data['description'].tolist(), mydata3=result_data['newabv'].tolist())      


#################################################
# Deploy second page/(http://127.0.0.1:5000/data)
#################################################
@app.route("/data")
def names():
    """Return a all database data"""
    df = pd.read_csv("cleanedfinalbeerdata.csv")
    # Return a list of the column names (sample names)
    return df.to_json(orient='records')    

@app.route("/dataTable")
def TABLE():
    return render_template("beerindex.htm")


# @app.route('/ML')
# def dynamic_page():
#     import model
#     return model


if __name__ == "__main__":
    ##app.run(debug=True)
    app.run(host='0.0.0.0', port='5000', debug=True)