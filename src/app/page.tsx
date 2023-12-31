
import NFTListing from '@/components/home/NFTListing'
import StatisticItem from '@/components/home/StatisticItem'
import './Home.scss'
import Lends from './lends/page'
export default function Home() {
  return (
    <div className='app-home'>
      <div className='app-home--statistic'>
          <StatisticItem title='Total Volume' note="" value={100} />
          <StatisticItem title='Interest earned' note="" value={400} />
          <StatisticItem title='Loans borrowed' note="" value={500} />
          <StatisticItem title='Total Volume' note="" value={100} />
      </div>
      <Lends />
    </div>
  )
}
