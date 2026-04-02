/* reference for material ui components used
https://mui.com/material-ui/react-card/#media

*/

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// props best practices: option 1 - one overall prop, more descriptively named
export default function AgencyCard(agencyData) {
    return <Card sx={{ marginTop: "8px", maxWidth: 345 }}>
    {agencyData.imageUrl && <CardMedia
      component="img"
      height="140"
      image={agencyData.imageUrl}
      alt="green iguana"
    />}
    <CardContent>
      <Typography variant="h5" component="div">
        {agencyData.name}
      </Typography>
      <Typography gutterBottom variant="body2" component="div">
        {agencyData.abbreviation}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {agencyData.description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Go to Agency</Button>
    </CardActions>
  </Card>
}