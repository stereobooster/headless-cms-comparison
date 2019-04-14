import CannerScript, {Body} from 'canner-script';
import Posts from './schema/posts.schema.js';
import Categories from './schema/categories.schema';
import BodyComponent from './components/layout/body';
import {ImgurStorage} from '@canner/storage';

export const imageStorage = new ImgurStorage({
  clientId: 'a214c4836559c77'
});

const schema = (
  <root imageStorage={imageStorage}>
    <Body component={BodyComponent}>
      <Posts dataSource={{name: 'memory'}} />
      <Categories dataSource={{name: 'memory'}} />
    </Body>
  </root>
);

export default schema;