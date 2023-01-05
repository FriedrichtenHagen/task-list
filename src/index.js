import { formatDistance, subDays } from 'date-fns'

const test = formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true })

alert(test)