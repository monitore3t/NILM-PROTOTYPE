import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as cors from 'cors';

const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://firestore-nilmprototype.firebaseio.com"
});

const db = admin.firestore();
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
   response.json({
       mensaje: 'Hola mundo'
   });
 });

export const getDatos = functions.https.onRequest( async(request, response) => {
    
  const nimlRef = db.collection('nilm-prototype');
  const docsSnap = await nimlRef.get();
  const elementos = docsSnap.docs.map( doc => doc.data() );

  response.json( elementos );

});

// Express

const app = express();
app.use( cors ({ origin: true }) );

app.get('/nilm-prototype',async (req,res) => {
  
  const nimlRef = db.collection('nilm-prototype');
  const docsSnap = await nimlRef.get();
  const elementos = docsSnap.docs.map( doc => doc.data() );

  res.json( elementos );

});

app.post('/nilm-prototype/:id',async (req,res) => {
  
  const id = req.params.id
  const eleRef = db.collection('nilm-prototype').doc( id );
  const eleSnap = await eleRef.get();
  
  if ( !eleSnap.exists ){
    res.status(404).json({
      ok: false,
      mensaje: 'No existe un elemento con ese ID ' + id
    });
  } else {
    
      const antes = eleSnap.data() || { potencia: 0};
      await eleRef.update({
        potencia: antes.potencia + 1 
      });

      res.json({
        ok: true,
        mensaje: `Se incremento la potencia del electrodomestico ${ antes.name }`
      })
  }
});


export const api = functions.https.onRequest(app);