module.exports = {
  apps: [{
    name: 'node-cicd-demo',
    script: './index.js',
    instances: 1,
    autorestart: true,
    watch: false,
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
};
