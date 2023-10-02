module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: 'myController.index',
    config: {
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/findNext/:model/:id',
    handler: 'navigator.findNext',
    config: {
      policies: [],
    },
  },
  {
    method: 'GET',
    path: '/findPrevious/:model/:id',
    handler: 'navigator.findPrevious',
    config: {
      policies: [],
    },
  },
];
