import Credentials from './Credentials';

export default interface RegisterData extends Credentials {
  name: string;
  password2: string;
}
