import data from './data.json';
import styled from 'styled-components';
import styles from './app.module.css';
import SearchIcon from '../assets/icons/Search_icon.png';
import RouteTable from './components/route-table.component';

const SearchBarInput = styled.input.attrs({
  type : "search",  
})`
& {
  border: 1px solid grey;
  border-radius: 10px;
  padding: 0.5rem 0.5rem 0.5rem 2rem;
  width: 100%;
}
`
export function App() {
  fetch('http://localhost:8080/api/addresses').then(console.log).catch(console.error);
  return (
    <>
    <div className={styles['face-page__container']}>
      <header className={styles['face-page-header__container']}>
        <div className={styles['logo-area']}>
          <div className={styles['logo-pt-1']}></div>
          <div className={styles['logo--pt-2']} ></div>
        </div>
      </header>

         <div className={styles['face-page__container__aside']}>

           <div className={styles['face-page__container__aside__navbar']}></div>

         </div>
      <main className={styles['main-container']}>
        <h1 className={styles['main-container__header']}>Routes list</h1>
       
       
        <div className={styles['main-container__search-bar-container']}>
            <SearchBarInput placeholder='Search by rourte ID' name="search" />
            <img className={styles['search-bar--icon']} src={SearchIcon} alt="search..." />
            
        </div>


        <div className='main--container-just-bar' ></div>
       
        <div className='main--container-route-id-box' >
          <RouteTable data={data}/>
          </div> 
        </main>    
       
    </div>
    
    </>
  );
}
export default App;
