const axios = require('axios');

const getHeadlines = async () => {
  console.log('start fetching headlines')
  try {
    const res = await axios.get(`https://ghapi.huchen.dev/repositories?&since=monthly`);
    const top10Objs = res.data.slice(0, 10);
    // console.log(top10Objs)
    const contents = top10Objs
      .map((obj, i) => {
        let { author, name, url, description, stars, forks, currentPeriodStars, language} = obj;

        return `${i + 1}. [**${author}/${name}**: ${description}](${url})
${currentPeriodStars} stars this month | ${stars} stars | ${forks} forks ${language ? '| ' + language : ''}

`;
      }).join('');
    // console.log(contents);
    return contents;
  } catch (error) {
    console.log(error);
    throw error
  }

}

module.exports = getHeadlines;


// getHeadlines(new Date())
