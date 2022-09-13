require('dotenv').config();

const axios = require('axios');

// enconde function
const { base64Encode } = require('./base');

// XML data methods.
const gravTest        = require('./xml/testXML');
const saveData        = require('./xml/saveDataXML');
const userimages      = require('./xml/userImagesXML');
const saveUrl         = require('./xml/saveUrlXML');
const exists          = require('./xml/existsXML');
const addresses       = require('./xml/addressesXML');
const removeImage     = require('./xml/removeImageXML');
const deleteUserImage = require('./xml/deleteuserImageXML');
const useUserImage    = require('./xml/useUserImageXML');

const emailHash = process.env.GRAVATAR_HASH_EMAIL;
const url = `https://secure.gravatar.com/xmlrpc?user=${emailHash}`;
const Gravatar = {


  test: (data) => {
    const config = {
        method: "POST",
        url: `https://secure.gravatar.com/xmlrpc?user=${emailHash}`,
        headers: {},
        data: data
    };
    axios(config)
      .then((response) => console.log(response.data)) // xml response
      .catch((error) => console.log(error)) // xml error
  },

  saveData: (file, data) => {
    const base64Image = base64Encode(file);
    const config = {
      method: "POST",
      url: url,
      headers: {},
      data: data(base64Image)
    };

    axios(config)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error))
  },

  userimages: (data, photoUrl) => {
    const config = {
      methdo: "POST",
      url: url,
      headers: {},
      data: data
    }

    axios(config)
      .then(response => console.log(response.data))
      .catch(error => console.log(error))
  },

  saveUrl: (data, photoUrl) => {
    const config = {
      method: 'POST',
      url: url,
      headers: {},
      data: data(photoUrl)
    }

    axios(config)
      .then(response => console.log(response.data))
      .catch(error => console.log(error))
  },

  exists: (data) => {
    const config = {
      method: 'POST',
      url: url,
      headers: {},
      data: data,
    }

    axios(config)
      .then(response => console.log(response.data))
      .catch(error => console.log(error))
  },

  addresses: (data) => {
    const config = {
      method: 'POST',
      url: url,
      headers: {},
      data: data
    }

    axios(config)
      .then(response => console.log(response.data))
      .catch(error => console.log(error))
  },

  removeImage: (data, address) => {
    const config = {
      method: 'POST',
      url: url,
      headers: {},
      data: data(address)
    }

    axios(config)
      .then(response => console.log(response.data))
      .catch(error => console.log(error))
  },

  deleteUserImage: (data, imgId) => {
    const config = {
      method: 'POST',
      url: url,
      headers: {},
      data: data(imgId)
    }

    axios(config)
      .then(response => console.log(response.data))
      .catch(error => console.log(error))
  },

  userUseImage: (data, imgId, email) => {
    const config = {
      method: 'POST',
      url: url,
      headers: {},
      data: data(imgId, email)
    }

    axios(config)
      .then(response => console.log(response.data))
      .catch(error => console.log(error))
  },
}

module.exports = Gravatar;

