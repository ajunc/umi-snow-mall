import React from 'react';
import styles from './index.less';
import SearchInput from './SearchInput/index';
import Carousel from './Carousel/index';
import NavTable from './NavTable/index';
import Arc from '@/components/Arc';
import Recommend from './Recommend';
import { queryRecommend } from '@/services/home';
import { IGetInitialProps } from 'umi';

class Home extends React.Component {
  static getInitialProps = (async ctx => {
    debugger;
    let res = await queryRecommend();
    return {
      list: (res && res.list && res.list.data) || '',
    };
  }) as IGetInitialProps;
  render() {
    const { list } = this.props;
    debugger;
    return (
      <div className={styles.main}>
        <SearchInput />
        <Carousel />
        <Arc />
        <NavTable />
        <Recommend list={list} />
      </div>
    );
  }
}

// const Home = (props) => {
//   const {list} = props
//   debugger
//   return (
//     <div className={styles.main}>
//       <SearchInput />
//       <Carousel />
//       <Arc />
//       <NavTable />
//       <Recommend list={list} />
//     </div>
//   );
// };

// Home.getInitialProps = async () => {
//   // return Promise.resolve({
//   //   data: {
//   //     title: 'Hello World',
//   //   }
//   // })
//   debugger
//   let res = await queryRecommend()
//   return {
//     list: res.list.data
//   }
//   // queryRecommend().then(res => {
//   //   return {
//   //     list: res.list.data,
//   //   };
//   // });
// }
export default Home;
