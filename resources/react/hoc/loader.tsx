import Loadable from 'react-loadable';
import BaseLoader from 'components/shared/loaders/base';

const SETTINGS = {
  loading: BaseLoader,
  delay: 200,
  timeout: 30000,
};

export default (opts: any) => Loadable(Object.assign(SETTINGS, opts));
