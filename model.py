import sklearn
from sklearn.neighbors import KNeighborsClassifier
import pandas as pd
import os
import numpy as np
# import matplotlib.pyplot as plt
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.feature_extraction import text
from sklearn.cluster import KMeans
from sklearn.metrics import adjusted_rand_score
from numpy import nan as Nan
import random

def myfunct(form):
    desc = 'Stout'
    abv = float(form[0])
    df = pd.read_csv("cleanedfinalbeerdata.csv")

    form.pop(0)    
    print(form) #removing the ABV 

    df2 = pd.DataFrame([[33050, "UserBeer", Nan, form[0], abv, Nan, Nan, Nan, Nan, Nan, Nan, Nan, Nan, Nan, Nan, Nan, Nan, Nan, Nan, abv]],
                    columns=list(df.columns.values))

    form.pop(0) 
    if(len(form)>0):
        for desc in form:
            dfAdd = pd.DataFrame([[33050, "UserBeer", Nan, desc, abv, Nan, Nan, Nan, Nan, Nan, Nan, Nan, Nan, Nan, Nan, Nan, Nan, Nan, Nan, abv]],
                    columns=list(df.columns.values))
            df2= pd.concat([df2, dfAdd])

    df3 = pd.concat([df,df2])

    print(len(df3.index))
    """
    form is always structured with abv first, hence abv = float(form[0])

    currently, not set up to hand multiple descriptions 

    """

    df3.loc[df3['id'] == 'UserBeer']

    finaldf1 = df3[(df3.description.notnull())]

    documents = np.ndarray.tolist(finaldf1['description'].values)

    my_stop_words = text.ENGLISH_STOP_WORDS.union(["beer"])
    vectorizer = TfidfVectorizer(stop_words=my_stop_words, decode_error='replace', encoding='utf-8')

    X = vectorizer.fit_transform(documents)

    kmeans = KMeans(n_clusters=30)
    srmdata = np.array(list(zip(finaldf1['newabv'].values)), X)
    kmeans.fit(srmdata)
    predicted_clusters = kmeans.predict(srmdata)

    finaldf1['predicted group'] = predicted_clusters

    finaldf1[finaldf1['id'].str.contains('UserBeer')]

    chosenbeergroup = finaldf1[finaldf1['id'].str.contains('UserBeer')]['predicted group'].values[0]


    filterdf = finaldf1[finaldf1['predicted group']==chosenbeergroup]
    filterdf.head()

    selectarr = []
    numberingroup = filterdf['id'].count()

    for x in range(0, 6):
        selectarr.append (random.randint(0, int(numberingroup)))

    finaluserdf = filterdf.iloc[selectarr]

    print(finaluserdf["description"],finaluserdf["name"])
    return finaluserdf
