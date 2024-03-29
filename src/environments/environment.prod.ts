const env = (<any>window).edgeops_env || {};

export const environment = {
    production: true,
    apiUrl: `/project_for_sl3-backend2/api`,
    keycloakParams: Object.assign(
        {},
        {
            enable: true,
            url: 'https://keycloak.dagility.com/auth',
            realm: 'Edgeops-Dev',
            clientId: 'Edgeops-ui',
            'ssl-required': 'external',
            'public-client': true,
        },
        env.keycloak
    ),
};
