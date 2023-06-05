import { Layout } from '../../../components/Layout';
import Loader from '../../Loader/ui/Loader';
import './PageLoader.scss';

const PageLoader = () => {
  return (
    <Layout>
      <div className="PageLoader">
        <Loader />
      </div>
    </Layout>
  );
};

export default PageLoader;
