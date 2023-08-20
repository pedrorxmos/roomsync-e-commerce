import { Category } from '../interfaces'

export const category: Category = {
  id: 'decoration',
  name: 'Decoration',
  parent: 'decor'
}

export const decorationInnerSvg =
  '<path d="M157.255 40.1452C148.855 43.4785 143.521 48.5452 139.788 56.9452C136.988 63.0785 135.121 64.8118 120.188 74.9452C89.5213 95.8785 81.7879 100.679 77.6546 101.212C67.5213 102.279 58.5879 113.345 59.2546 123.745C59.3879 126.545 60.8546 131.212 62.5879 134.145C65.5213 139.479 66.5879 144.012 67.7879 156.812C68.1879 160.545 68.7213 165.079 69.1213 166.679C69.3879 168.412 70.0546 173.212 70.4546 177.345C70.9879 181.479 71.5213 186.279 71.7879 188.145C72.3213 192.012 73.2546 199.345 74.4546 208.812C74.8546 212.412 75.5213 217.079 75.9213 219.079C76.4546 222.279 75.1213 224.145 67.2546 231.745C59.3879 239.612 54.9879 246.412 52.1879 254.812C51.7879 255.879 52.0546 257.879 52.7213 259.079C53.7879 261.345 57.7879 261.479 107.121 261.479C160.988 261.479 162.188 261.345 162.455 256.812C162.721 254.812 156.455 242.679 152.988 238.145C151.255 235.879 149.388 231.479 148.588 228.279C146.055 216.679 136.321 211.479 124.455 215.479C120.055 216.945 114.321 216.945 107.521 215.479C104.188 214.679 103.655 213.212 102.455 202.679C102.055 198.545 101.521 193.879 101.255 192.545C100.855 191.079 100.321 186.679 99.7879 182.679C98.5879 172.412 97.7879 165.345 97.1213 161.345C96.7213 159.479 96.1879 154.412 95.6546 150.012C95.2546 145.745 94.7213 142.012 94.4546 141.612C94.1879 141.345 95.6546 138.679 97.6546 135.612C101.788 129.612 101.788 129.612 101.788 124.945C101.788 122.279 104.588 119.745 117.921 110.812C126.855 104.945 134.455 100.279 134.721 100.679C135.121 100.945 135.521 105.612 135.655 111.079C136.188 123.745 137.388 128.545 142.321 138.012C149.121 150.945 149.521 150.945 166.055 140.012C179.788 130.812 180.455 130.545 184.055 132.412C186.055 133.479 190.588 134.412 194.055 134.679C208.055 135.479 219.121 125.612 219.788 111.745C220.055 108.012 220.188 104.412 220.321 104.012C220.455 103.612 226.455 99.2118 233.788 94.2785C241.121 89.3452 247.388 84.6785 247.921 84.0118C249.521 81.3452 246.988 76.1452 240.455 69.0785C230.321 58.0118 218.855 52.0118 204.321 50.1452C196.321 49.0785 191.788 47.6118 190.455 45.4785C190.055 44.8118 187.121 42.8118 184.055 41.2118C176.588 37.3452 165.655 36.9452 157.255 40.1452ZM179.121 49.8785C180.988 50.8118 182.455 52.2785 182.455 53.0785C182.455 54.6785 150.721 77.4785 148.455 77.4785C146.855 77.4785 145.788 71.8785 146.588 67.6118C148.055 58.9452 155.655 50.2785 162.855 48.6785C164.855 48.2785 167.121 47.7452 167.788 47.6118C169.788 46.9452 175.388 48.1452 179.121 49.8785ZM217.121 64.0118C225.121 67.7452 236.988 78.1452 235.788 80.1452C235.388 80.8118 229.788 84.8118 223.388 89.2118C216.988 93.4785 198.721 105.879 182.721 116.679C160.855 131.479 153.255 136.012 151.921 134.945C149.521 132.945 145.521 118.812 145.388 111.879C145.121 101.479 147.121 92.5452 150.321 89.4785C152.055 88.0118 162.721 80.4118 173.921 72.6785L194.455 58.6785L201.788 59.4785C205.788 59.8785 212.721 62.0118 217.121 64.0118ZM136.721 85.6118C133.788 88.5452 100.588 110.812 99.3879 110.812C98.8546 110.812 97.5213 109.345 96.1879 107.745C94.0546 104.679 94.1879 104.545 114.855 90.5452L135.788 76.4118L137.388 79.8785C138.721 82.9452 138.588 83.8785 136.721 85.6118ZM89.2546 115.479C93.2546 120.545 92.4546 126.412 87.3879 131.079C84.3213 133.745 82.3213 134.545 79.5213 134.012C74.8546 133.212 70.0546 128.545 69.3879 124.145C67.6546 113.212 82.3213 106.812 89.2546 115.479ZM209.121 115.212C208.588 117.079 206.855 119.879 205.255 121.345C202.188 124.279 192.988 126.145 191.788 124.012C191.121 123.079 208.588 110.679 209.521 111.479C209.788 111.612 209.521 113.345 209.121 115.212ZM85.5213 145.745C85.6546 148.145 86.9879 158.412 87.7879 164.145C88.1879 166.812 88.8546 171.612 89.1213 174.812C89.3879 178.012 90.0546 182.945 90.4546 185.745C90.9879 188.679 91.5213 192.945 91.6546 195.212C92.1879 199.612 93.9213 213.212 94.1879 215.345C94.5879 217.345 88.0546 220.279 86.5879 218.812C85.1213 217.345 85.1213 217.345 83.9213 206.145C83.5213 201.745 82.8546 196.679 82.4546 194.945C82.1879 193.212 81.5213 188.545 81.1213 184.812C80.8546 180.945 80.1879 175.745 79.7879 173.212C79.3879 170.679 78.8546 166.545 78.5879 164.012C78.3213 161.479 77.6546 156.012 77.1213 151.745L76.1879 144.145H80.7213C83.5213 144.145 85.3879 144.812 85.5213 145.745ZM126.321 232.279C140.055 238.945 149.255 246.412 148.055 249.879C147.655 251.079 136.321 251.479 106.588 251.479C84.0546 251.479 65.3879 251.212 65.1213 250.812C64.8546 250.412 66.5879 247.345 68.9879 244.145C76.3213 234.145 92.0546 226.545 107.121 225.745C111.121 225.479 115.655 226.945 126.321 232.279Z"></path><path d="M75.1214 120.012C72.7214 124.545 79.6547 129.212 82.7214 125.079C83.388 124.279 83.9214 122.812 83.788 122.145C83.5214 117.212 77.388 115.745 75.1214 120.012Z"></path>'