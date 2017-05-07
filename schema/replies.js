export default {
  _all: { enabled: false },
  properties: {
    createdAt: { type: 'date' },
    versions: {
      type: 'nested',
      properties: {
        // auth
        userId: { type: 'keyword' },
        appId: { type: 'keyword' },

        type: { type: 'keyword' }, // 'RUMOR', 'NOT_RUMOR', 'NOT_ARTICLE'
        text: { type: 'text', analyzer: 'cjk_url_email' },
        reference: { type: 'text' },
        createdAt: { type: 'date' },
      },
    },
  },
};
