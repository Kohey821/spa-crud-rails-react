require "test_helper"

class PostsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @post = posts(:one)
  end

  teardown do
    Rails.cache.clear
  end

  test "ポスト投函" do
    assert_difference('Post.count') do
      post posts_url, params: {
        title: 'タイトル',
        body: 'ボディ',
        image: fixture_file_upload('post.png', 'image/png'),
      }
    end

    assert_equal(
      @response.parsed_body['image_url'].split('/')[-1],
      'post.png'
    )

    assert_response 201
  end

  test "ポスト取得" do
    get post_url(@post)

    assert_response :success
  end

  test "ポスト更新" do
    patch post_url(@post), params: {
      title: 'タイトル更新',
      body: 'ボディ更新',
      image: fixture_file_upload('post_update.png', 'image/png'),
    }

    assert_equal(
      @response.parsed_body['image_url'].split('/')[-1],
      'post_update.png'
    )

    assert_response 200
  end

  test "ポスト削除" do
    assert_difference('Post.count', -1) do
      delete post_url(@post)
    end

    assert_response 204
  end
end
