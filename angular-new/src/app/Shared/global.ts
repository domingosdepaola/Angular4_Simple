import { environment } from '../../environments/environment';
export class Global {
    public static BASE_USER_ENDPOINT: string = environment.server_ip + 'userapi';
}