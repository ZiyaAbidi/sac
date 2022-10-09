import React from 'react'

const ListTable = () => {
    return (
        <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        <th>#SrNo</th>
                        <th>Banner</th>
                        <th>#id</th>
                        <th>Title</th>
                        <th>Desc</th>
                        <th>Category</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>1</td>
                        <td><img src="./img/banner1.png" alt="banner" className="img-fluid" style={{ minWidth:'200px' }} /></td>
                        <td>006abcdefgh85</td>
                        <td>Summer festival 2022 for the best of us</td>
                        <td>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse quisquam fugit accusantium exercitationem. Sed mollitia optio cum ut inventore deleniti omnis eveniet totam earum numquam debitis corrupti, pariatur cumque distinctio.</td>
                        <td>Services</td>
                        <td>Panding</td>
                        <td className="no_wrap">
                            <a href="#"><img src="./img/edit.png" alt="edit" /> <span>Edit</span></a>
                            <a href="#"><img src="./img/delete.png" alt="delete" />
                                <span>Trash</span></a>
                            <a href="#"><img src="./img/send.png" alt="live" /> <strong><span>Go
                                Live!</span></strong></a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ListTable
