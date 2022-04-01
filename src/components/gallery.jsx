import { Row, Col } from 'antd'

export const Gallery = (props) => {
  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Sản phẩm</h2>
          <p>
            Combo 99k cực sốc.
          </p>
        </div>

        <Row justify='center'>
          <Col><img src="img/bg3.jpg" alt="img" style={{ width: '100%', height: 'auto' }} /></Col>
        </Row>

      </div>
    </div>
  )
}
