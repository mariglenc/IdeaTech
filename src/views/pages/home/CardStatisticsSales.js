// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'
import OptionsMenu from 'src/@core/components/option-menu'
import { Button } from '@mui/material'

const salesData = [
  {
    stats: '8,458',
    color: 'primary',
    title: 'Customers',
    icon: 'mdi:account-outline'
  },
  {
    stats: '$28.5k',
    color: 'warning',
    icon: 'mdi:poll',
    title: 'Total Profit'
  },
  {
    color: 'info',
    stats: '2,450k',
    title: 'Transactions',
    icon: 'mdi:trending-up'
  }
]

const renderStats = () => {
  return salesData.map((sale, index) => (
    <Grid item xs={12} sm={4} key={index}>
      <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
        <CustomAvatar skin='light' variant='rounded' color={sale.color} sx={{ mr: 4 }}>
          <Icon icon={sale.icon} />
        </CustomAvatar>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant='h6' sx={{ fontWeight: 600 }}>
            {sale.stats}
          </Typography>
          <Typography variant='caption'>{sale.title}</Typography>
        </Box>
      </Box>
    </Grid>
  ))
}

const CardStatisticsSales = () => {
  return (
    <Card>
      <CardHeader
        title='Sales Overview'
        titleTypographyProps={{ variant: 'h6' }}
        action={
          <OptionsMenu
            options={['Refresh', 'Share']}
            iconButtonProps={{ size: 'small', className: 'card-more-options', sx: { color: 'text.secondary' } }}
          />
        }
      />
      <CardContent>
        <Grid container spacing={6}>
          {renderStats()}
        </Grid>
      </CardContent>
      <CardContent>
        <Button>View Sales</Button>
      </CardContent>
    </Card>
  )
}

export default CardStatisticsSales
