/Users/patrickbrennan/Desktop/SEI_1025/unit-3/labs/sports-react-app/public/images/Screen Shot 2021-12-17 at 7.54.54 PM.png

/Users/patrickbrennan/Desktop/SEI_1025/unit-3/labs/sports-react-app/public/images/Screen Shot 2021-12-17 at 7.55.07 PM.png

/Users/patrickbrennan/Desktop/SEI_1025/unit-3/labs/sports-react-app/public/images/Screen Shot 2021-12-17 at 7.55.16 PM.png

/Users/patrickbrennan/Desktop/SEI_1025/unit-3/labs/sports-react-app/public/images/Screen Shot 2021-12-17 at 7.55.24 PM.png

![image](https://user-images.githubusercontent.com/92609479/146813007-e047dd55-9862-41e6-9606-cae0226acbc8.png)

# Installation Instructions

1. Fork and clone the repo
2. CD into sports-react-app
3. Run npm install
4. Run npm start

# Component Code Snippet

 ```<div className="post" key={this.props.index} />
        <div className="inbox-messages" id="inbox-messages">
                <div v-for="(msg, index) in messages" className="card">
                    <div className="card-content">
                        <div className="msg-header">
                            <span className="msg-from"><small>Player: {this.props.person}</small></span>
```                     

# Data

const box = {
    name: 'Patrick Brennan',
    message: 'Hello this is a placeholder message designed to take up space and present itself as if it were an actual sports content post'
}

const SportsMessagesPayload = [{
    name: 'Filthy G',
    message: 'Filthy G is currently at a 4:1 KD ratio in CTF'
},
{
    name: 'Cratos',
    message: 'Cratos is currently at a 2:2 KD ratio in CTF'
},
{
    name: 'SNIPEDRONE',
    message: 'SNIPEDRONE is currently at a 2:2 KD in CTF'
},
{
    name: 'Shaady',
    message: 'Shaady is currently at a 2:6 KD ratio in CTF'
},
{
    name: 'Lqgend',
    message: 'Lqgend is currently at a 3:7 KD ratio in CTF'
},
]

# Test Snippet
```test('renders questions tag', () => {
  render(<Inbox />);
  const spanElement = screen.getByText(/Profile/i);
  expect(spanElement).toBeInTheDocument();
});
```

![Untitled](https://user-images.githubusercontent.com/92609479/146842097-f58037cd-7076-483e-968a-3b62c7aad827.png)

