export const formatDate = (date, timeZone = 'EST') => {
  const timeZoneMap = {
    EST: 'America/New_York',
    CST: 'America/Chicago',
    MST: 'America/Denver',
    PST: 'America/Los_Angeles'
  }

  const timeOptions = { 
    dateStyle: 'full', 
    timeStyle: 'long', 
    timeZone: timeZoneMap[timeZone]
  }

  return new Intl.DateTimeFormat('en-US', timeOptions).format(new Date(date))
};
