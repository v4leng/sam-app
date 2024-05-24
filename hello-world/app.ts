import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export const lambdaHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const name =
        event.queryStringParameters && event.queryStringParameters.name ? event.queryStringParameters.name : 'persona';

    const now = new Date();

    const options: Intl.DateTimeFormatOptions = {
        timeZone: 'America/Argentina/Buenos_Aires',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZoneName: 'short',
    };
    const formattedTime = now.toLocaleString('es-ES', options).replace(' ', ', ');

    const responseBody = `Hola ${name}, la hora actual es ${formattedTime}`;

    const response: APIGatewayProxyResult = {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/html',
        },
        body: responseBody,
    };

    return response;
};
