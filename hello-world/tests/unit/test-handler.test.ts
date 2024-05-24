import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { lambdaHandler } from '../../app';
import { expect, describe, it } from '@jest/globals';

describe('Unit test for app handler', () => {
    it('verifies successful response', async () => {
        const event: APIGatewayProxyEvent = {
            httpMethod: 'GET',
            body: '',
            headers: {},
            isBase64Encoded: false,
            multiValueHeaders: {},
            multiValueQueryStringParameters: {},
            path: '/hello',
            pathParameters: {},
            queryStringParameters: {
                name: 'Valentina',
            },
            requestContext: {
                accountId: '',
                apiId: '',
                authorizer: {},
                httpMethod: 'GET',
                identity: {
                    accessKey: '',
                    accountId: '',
                    apiKey: '',
                    apiKeyId: '',
                    caller: '',
                    clientCert: {
                        clientCertPem: '',
                        issuerDN: '',
                        serialNumber: '',
                        subjectDN: '',
                        validity: { notAfter: '', notBefore: '' },
                    },
                    cognitoAuthenticationProvider: '',
                    cognitoAuthenticationType: '',
                    cognitoIdentityId: '',
                    cognitoIdentityPoolId: '',
                    principalOrgId: '',
                    sourceIp: '',
                    user: '',
                    userAgent: '',
                    userArn: '',
                },
                path: '/hello',
                protocol: 'HTTP/1.1',
                requestId: 'c6af9ac6-7b61-11e6-9a41-93e8deadbeef',
                requestTimeEpoch: 1428582896000,
                resourceId: '',
                resourcePath: '/hello',
                stage: 'dev',
            },
            resource: '',
            stageVariables: {},
        };

        // Obtener la hora actual
        const currentTime = new Date();
        const formattedTime = `${currentTime.getHours()}:${currentTime.getMinutes()}`;

        const result: APIGatewayProxyResult = await lambdaHandler(event);

        console.log(result.body);

        expect(result.statusCode).toEqual(200);
        expect(result.body).toContain(`Hola Valentina, la hora actual es ${formattedTime}`);
    });
});
