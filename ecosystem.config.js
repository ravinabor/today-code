module.exports = {
  apps: [
    {
      name: 'node-cicd-demo',
      script: '/root/opt/index.js', // Absolute path is safer for services
      instances: 1,
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      }
    }
  ]
};
