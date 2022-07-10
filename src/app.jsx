import styles from './app.module.css'
import AwardSection from './components/award_section/award_section';
import ContentSection from './components/content_section/content_section';
import DetailSection from './components/detail_section/detail_section';
function App() {
  return (
    <div className={styles.App}>
      <ContentSection />
      <DetailSection />
      <AwardSection />
    </div>)
}
export default App;
