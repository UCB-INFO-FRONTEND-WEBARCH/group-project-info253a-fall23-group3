// Use the Card to back to Home

import Card from '../Components/Shared/Card'

function AbouPage() {
    return (
        <Card>
            <div className='about'>
                <h1>About This Project</h1>
                <p>
                    This is a React app to leave feedback for a product or service
                </p>
                <p>Version: 1.0.0</p>

                <P>
                    <a href='/'>Back to Home</a>
                </P>
            </div>
        </Card>
    )
}