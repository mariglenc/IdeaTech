// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardStatisticsSales from 'src/views/pages/home/CardStatisticsSales'
import CardMeetingSchedule from 'src/views/pages/home/CardMeetingSchedule'
import CardWidgetsMonthlyBudget from 'src/views/pages/home/CardWidgetsMonthlyBudget'
import Spacing from 'src/@core/theme/spacing'
import CrmTable from 'src/views/pages/home/CrmTable'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Component Import
import CardStatisticsVertical from 'src/@core/components/card-statistics/card-stats-vertical'

const Home = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={8}>
        <CardStatisticsSales />
      </Grid>
      
      <Grid item xs={6} sm={3} md={2}>
        <CardStatisticsVertical
          stats='155k'
          color='primary'
          trendNumber='+22%'
          title='Total Orders'
          chipText='Last 4 Month'
          icon={<Icon icon='mdi:cart-plus' />}
        />
      </Grid>
      <Grid item xs={6} sm={3} md={2}>
        <CardStatisticsVertical
          stats='$13.4k'
          color='success'
          trendNumber='+38%'
          title='Total Sales'
          chipText='Last Six Month'
          icon={<Icon icon='mdi:currency-usd' />}
        />
      </Grid>
      
      <Grid item xs={12} >
        <CrmTable />
      </Grid>
      <Grid item xs={12} md={6} >
        <CardWidgetsMonthlyBudget />
      </Grid>
      <Grid item xs={12} md={6}>
        <CardMeetingSchedule />
      </Grid>
    </Grid>
  )
}

export default Home
