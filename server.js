const express = require('express');

express().use(express.static(__dirname + '/dist')).listen(5000, () => console.log('server upon 5000'));
