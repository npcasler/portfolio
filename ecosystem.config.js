module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'API',
      script    : './server.js',
      port      : 3000,
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production',
		PORT: 3000
      }
    }//,

    // Second application
    //{
    //  name      : 'WEB',
    //  script    : 'web.js'
    //}
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : 'node',
      host : '45.79.133.206',
      ref  : 'origin/master',
      repo : 'git@github.com:portfolio.git',
      path : '/webapps/development/portfolio',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    },
    dev : {
      user : 'node',
      host : '45.79.133.206',
      ref  : 'origin/master',
      repo : 'git@github.com:portfolio.git',
      path : '/webapps/development/portfolio',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env dev',
      env  : {
        NODE_ENV: 'development'
      }
    }
  }
};
