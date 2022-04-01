import { Row, Col } from 'antd'

export const Gallery = (props) => {
  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2 class="animate-charcter" style={{ fontSize: '40px' }}>Sản phẩm</h2>
          <p><span style={{ color: "red" }}>SALE 50%</span> :1 Combo 3 món <span style={{ color: "red", fontSize: '30px' }}>#119k</span></p>
          <p><span style={{ color: "red" }}>SALE 50%</span> :2 Combo 6 món <span style={{ color: "red", fontSize: '30px' }}>
            #249k
          </span> <span style={{ color: '#ee4d2d' }}>Miễn phí vận chuyển</span> </p>
          <p className='p-content'>
            Giá đỡ điện thoại thông minh xoay 360 độ tuỳ chỉnh cao thấp là vật dụng không thể thiếu cho trẻ học online,người lớn xem phim đọc báo làm việc.
          </p>
          <p className='p-content'>
            Dây sạc 3 Cổng tye C, lighting,Usb sạc được mọi loại điện thoại.
          </p>
          <p className='p-content'>
            Củ sạc nhanh 30W sạc siêu nhanh an toàn cho pin điện thoại.
          </p>
        </div>



        <h2 class="animate-charcter" style={{ fontSize: '40px' }}>CAM KẾT</h2>
        <div className='about-text'>

          <Row justify='center'>
            <Col style={{ textAlign: 'left' }}>
              <ul>
                <li>Sản phẩm loại 1 chất lượng cao</li>
                <li>Bảo hành 3 tháng</li>
                <li>Lỗi 1 đổi 1</li>
              </ul>
            </Col>
          </Row>
        </div>

        <Row justify='center'>
          <Col><img src="img/bgaa.jpg" alt="img" style={{ width: '100%', height: 'auto' }} /></Col>
        </Row>

      </div>
    </div>
  )
}
